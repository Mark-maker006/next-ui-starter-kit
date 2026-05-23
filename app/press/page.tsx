import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Press() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Mark.cc in the News
          </h1>

          <p className="mt-6 md:text-xl">
            At Mark.cc, we're redefining the way you manage your workforce. Our
            innovative platform simplifies employee tracking, enables seamless
            interview scheduling, and helps you streamline recruitment—all in one
            secure and user-friendly dashboard. Discover how we're making HR
            management accessible for everyone.
          </p>

          <p className="mt-6 md:text-xl">
            Our commitment is to empower HR teams with safe, simple, and efficient
            tools to take control of their workforce. As we continue to grow,
            we're proud to be recognized for our innovative approach and
            dedication to customer success.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}