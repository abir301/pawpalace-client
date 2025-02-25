import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const AboutUs = () => {
  const faqs = [
    {
      question: "How does the adoption process work?",
      answer:
        "The adoption process is simple! Browse available pets, fill out an adoption application, and connect with the shelter or foster home to meet your new friend.",
    },
    {
      question: "Why was this website created?",
      answer:
        "This website was built to connect loving homes with pets in need, making the adoption process easier and more accessible for everyone.",
    },
    {
      question: "How can I find the right pet for me?",
      answer:
        "Use our advanced search filters to find pets based on breed, size, age, and other preferences that fit your lifestyle.",
    },
    {
      question: "What resources are available for new pet owners?",
      answer:
        "We provide a variety of resources, including training tips, pet care guides, and access to local veterinary services to help you along the way.",
    },
    {
      question: "Can I volunteer or donate to help?",
      answer:
        "Absolutely! You can volunteer your time, foster pets, or donate to support shelters and rescue organizations listed on our site.",
    },
  ];

  return (
    <section className="py-10 bg-red-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-lg text-gray-600">
          Learn more about how we work and why we are passionate about pet
          adoption.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Disclosure.Button className="flex justify-between w-full text-left text-lg font-semibold text-gray-900 focus:outline-none">
                  {faq.question}
                  <ChevronUpIcon
                    className={`h-6 w-6 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 text-gray-700">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
