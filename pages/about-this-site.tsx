/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutThisSite = () => {
    const PAGE_SEO: iSEO = {
        title: 'About this site',
        description: `This site was created by Caterina Leonelli, a software developer and a student of the University of Bologna. 
                      It was created and mantained voluntarily without any profit.`,
        keywords: 'blog, web development, next js, react, tailwind',
        author: 'Caterina Leonelli'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Informazioni su questo sito web
                    </Text>
                    <Text p className='text-lg'>
                        Questo sito è stato creato da me, Caterina Leonelli, una studentessa di Ingegneria Informatica Magistrale presso l'Università di Bologna.
                    </Text>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutThisSite