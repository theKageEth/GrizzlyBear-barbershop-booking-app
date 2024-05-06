First Install packages

```bash
npm i

```

Then, run the development server:

```bash
npm run dev

```

I used next api route in api//auth/[...nextauth] using next-auth library
src will contain all pages with components.
lib folder will have the database connection in utils
models scehma can be found in lib

data.js is fucntions to call to get data from database
action.js is for form actions
auth and auth.config for authentications
MongoDB string connection can be found in .env.local

Admin case sensitive. I changed the isAdim to true for this one in mongoDB atlas cloud version.
username: moham810
password: 123456

non admin or create your own
username:notadmin
password: 12345678
