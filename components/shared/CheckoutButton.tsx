"use client";

import { IEvent } from "@/lib/database/models/event.model";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Checkout from "./Checkout";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  //check if the event is done
  const hasEventFinished = new Date(event.endDateTime) < new Date();
  //get access to the user using this hook since we're not on the server and this is a client component
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  return (
    <div className="flex items-center gap-3">
      {/* cannot buy outdated events */}
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available
        </p>
      ) : (
        <>
          {/* figure out if the user is signed in to purchase this event */}
          <SignedOut>
            <Button asChild className="button rounded-full" size="lg">
              <Link href="/sign-in">Get Tickets</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
