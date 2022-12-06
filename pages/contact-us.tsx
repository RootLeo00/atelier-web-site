/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const ContactUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'Contact Us',
        description: 'For any any queries related to this project feel free to connect with us on atelier.lettura@libero.it',
        keywords: 'contact us, atelier.lettura@libero.it, book blog',
        author: 'Maria Grazia Liverani'
    } 
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 pb-10 md:pt-20 pt-[80px]'>
                <Text title className="!text-5xl !font-light">
                    Contattaci
                </Text>

                <div className="flex flex-wrap mt-8 justify-between">
                    <div className="md:w-1/2 w-full md:pl-2">
                        <Text p className="!text-lg leading-relaxed">
                        Vuoi entrare a far parte del nostro gruppo o collaborare con noi? Contattaci!<br />
                        Puoi scrivere alla nostra email: 
                        <Text subtitle className="!font-light md:!text-3xl">
                        atelier.lettura@libero.it
                        </Text>
                        Ci trovi anche nei canali social: <span className="text-blue-500">Facebook</span> <br />
                        </Text>
                    </div>
                </div>
            </section>

        </PageLayout>
    )
}

export default ContactUs