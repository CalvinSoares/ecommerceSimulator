import { getServerSession } from "next-auth";
import type { ReactNode } from "react";
import { nextAuthOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";
import React from "react";

interface PrivateLayoutProps {
	children: ReactNode;
}

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
	const session = await getServerSession(nextAuthOptions);

	if (session) {
		redirect("/dashboard");
	}

	return <>{children}</>;
};

export default PrivateLayout;
