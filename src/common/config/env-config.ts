import { str, bool, num, cleanEnv } from 'envalid';

export const config = cleanEnv(process.env, {
    NODE_ENV: str({ default: 'production', choices: ['production', 'staging', 'development', 'test'] }),
    AUTH0_CLIENT_ID: str({ default: 'GVh8k85SAftTTRbotGxsc986piXsR825' }),
    AUTH0_DOMAIN: str({ default: 'dev-cdebase.auth0.com' }),
    AUTH0_CUSTOM_DOMAIN: str({ devDefault: 'dev-cdebase.auth0.com' }),
    AUTH0_ISSUER: str({ default: 'https://dev-cdebase.auth0.com/' }),
    AUTH0_API_AUDIENCE: str({ default: 'https://dev-cdebase.auth0.com/api/v2/' }),
    ELECTRON_WEBPACK_WDS_PORT: num({ default: 3000 }),
    ELECTRON_WEBPACK_WDS_HOST: str({ default: 'localhost' }),
    // BACKEND_URL: str({ devDefault: __BACKEND_URL__ }),
    // GRAPHQL_URL: str({ devDefault: __GRAPHQL_URL__ }),
    CLIENT_URL: str({ default: 'http://localhost' }),
    NAMESPACE: str({ default: 'default' }),
});
