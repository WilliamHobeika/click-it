import CategoryFilters from "@/components/shared/CategoryFilters";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const pageNumber = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  //query is the one of the search
  //category for the category filtering
  //the rest are for the pagination
  const events = await getAllEvents({
    query: searchText,
    category: category,
    page: pageNumber,
    limit: 6,
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, and Celebrate Your Events on Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              With our worldwide network, you can book and acquire useful ideas
              from 3,168+ mentors from world-class companies.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <div className="bg-hero-img bg-contain bg-center bg-no-repeat" />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of Events
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilters />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={pageNumber}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
