export default function Page() {
    

    return ( 
        <UserProvider>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
          <Hdr signedIn={signedIn} onLogout={logoutHandler}/> 
          <div> 
            {/* <SetList items={DEFAULT_SETS} signedIn={signedIn}/> */}
            <Set title="Test Card Set" numTerms="0" creator="Josh"/>
          </div>
        </UserProvider>
      );
}

