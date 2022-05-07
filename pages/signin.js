import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function SignIn() {
  const router = useRouter();

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/v1/users/signin';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(`You are now LOGGED IN: ${result.data}`);
    router.push('/profile');
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle} Signin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <main>
          <div>
            <h2 className={utilStyles.headingLg}>BookClub member? Log In</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="last">Email address</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div>
                <label htmlFor="last">Password</label>
                <input type="password" id="password" name="password" required />
              </div>

              <button type="submit">Log In Now</button>
            </form>

            <div>
              <p>
                Not a member yet?{' '}
                <Link href="/signin">
                  <a>Sign Up here.</a>
                </Link>
              </p>
            </div>
          </div>
        </main>
      </section>
    </Layout>
  );
}
