import conf from "../conf/conf.js"

// Read document of appwrite for the codes

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }
    // We do not want the entire code dependent on appwrite so that when we have to change platform then it can be done
    // Form a appwrite wrapper having services

    // whichever method will be passed will provide email, password and name below in the code
    async createAccount({ email, password, name }) {
        try {
            // It is written in document to pass userId as first parameter which can be derived from ID of appwrite
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                //call another method login instead of returning userAccount
                return this.login({ email, password });
            }
            else {
                // return what we got
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // Method to check if user is already logged in
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    // LOGOUT (Refer document delete session)
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: Logout :: error", error);
        }
    }
}

const authService = new AuthService()

export default authService;