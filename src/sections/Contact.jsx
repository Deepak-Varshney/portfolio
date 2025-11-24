import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const accessKey =
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    "8d176d14-742f-4621-9e5b-7167ace851f6";
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Let’s Build Your Next Platform"
          sub="💬 Open to SDE / Full Stack roles & freelance collabs"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="w-full flex flex-col gap-7"
              >
                <input type="hidden" name="access_key" value={accessKey} />
                <input
                  type="hidden"
                  name="subject"
                  value="Portfolio Inquiry via Contact Form"
                />
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="Name"
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Your Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="number"
                    placeholder="Where can I reach you?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">Send Message</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <img src= 'https://raw.githubusercontent.com/Deepak-Varshney/Personal-portfolio/refs/heads/main/2.jpg' className="w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
            </img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
