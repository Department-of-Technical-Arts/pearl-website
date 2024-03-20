"use server";
import { redirect } from "next/navigation";

export default async function updateEvents(formData: FormData) {
	const dataFilter = formData.getAll("filter[]");

	if (dataFilter.length === 0) {
		redirect("/events");
	} else {
		console.log("redirected");
		const searchParams = new URLSearchParams({ filter: dataFilter.join(",") });
		redirect(`/events?${searchParams}#events`);
	}
}
