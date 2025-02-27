import Layout from "app/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold">Inclusive Disability Support Services For All Disabilities</h1>
        <p className="text-xl mt-4">Based in Victoria</p>
        <div className="mt-6">
          <Link href="/promo-video" className="bg-blue-600 text-white px-4 py-2 rounded">Watch our video!</Link>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">Who are we?</h2>
        <p>We provide inclusive day programs and overnight stays for people with disabilities.</p>
        <p>If you're looking for fun things to do in the city, NDIS assistance with daily life, or independent living help, we're here for you!</p>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">Our Programs & Supportive Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border p-4">
            <h3 className="text-2xl font-bold">Group Based Activities</h3>
            <p>Fun and social group activities like Le Mans Racing, Ski Trips, and more.</p>
            <Link href="/group-activities" className="bg-blue-500 text-white px-4 py-2 rounded block mt-2">Learn More</Link>
          </div>
          <div className="border p-4">
            <h3 className="text-2xl font-bold">Overnight Stays</h3>
            <p>Safe and supportive overnight programs to build independence and friendships.</p>
            <Link href="/overnight-stays" className="bg-blue-500 text-white px-4 py-2 rounded block mt-2">Learn More</Link>
          </div>
          <div className="border p-4">
            <h3 className="text-2xl font-bold">Life Skills Program</h3>
            <p>Workshops and sessions to develop everyday skills like cooking and budgeting.</p>
            <Link href="/lifeskills" className="bg-blue-500 text-white px-4 py-2 rounded block mt-2">Learn More</Link>
          </div>
          <div className="border p-4">
            <h3 className="text-2xl font-bold">1 on 1 Support</h3>
            <p>Personalized support to help you achieve your individual goals.</p>
            <Link href="/one-to-one" className="bg-blue-500 text-white px-4 py-2 rounded block mt-2">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">What Our Participants Are Saying</h2>
        <div className="space-y-4">
          <div className="border p-4">
            <p>"TDAC has a team of wonderful carers providing invaluable services and incredible opportunities..."</p>
            <p className="mt-2 font-bold">- Tina Ricardo</p>
          </div>
          <div className="border p-4">
            <p>"I highly recommend That Disability Adventure Company. My son Todd and I have had the pleasure of knowing Cody and Isaiah for several years..."</p>
            <p className="mt-2 font-bold">- Lee Nooy</p>
          </div>
          <div className="border p-4">
            <p>"Isaiah, Cody, and their team are fantastic, providing exceptional disability services for my client over the past several months..."</p>
            <p className="mt-2 font-bold">- Tanya Stephens</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
