import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    trustedOrigins: [
        process.env.NEXT_PUBLIC_APP_URL || "",
        "https://listify-one.vercel.app"
    ].filter(Boolean),
    socialProviders: {
        spotify: {
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            scope: ["user-read-email", "user-read-private", "user-top-read"],
        }
    },
});
