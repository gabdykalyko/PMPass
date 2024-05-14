# PMPass

- node version - 20.5.1
- react - 18.2.0

Project is running on [PM-Pass](https://pm-pass.kz/)

Admin pannel [Admin](https://admin.pm-pass.kz)

## Available Scripts

In the project directory, you can run:

### `npm install`

To install required modules.

### `npm start`

To start project.

### `npm run deploy`

To build project and upload to hosting.

In case, you need to upload project to hosting, you will need to create .htaccess file with following code:

RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
