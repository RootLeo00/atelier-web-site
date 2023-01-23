import { SORTED_BOOKS_BY_DATE } from "../../../BLOG_CONSTANTS/_BOOKS_LIST"
import { SORTED_MEETINGS_BY_DATE } from "../../../BLOG_CONSTANTS/_MEETINGS_LIST"
import { iArticle, IArticleHeaderData } from "../../shared/interfaces"
import FeaturedArticle from "../ArticleCards/FeaturedArticle"
import Seperator from "../Seperator"
import Text from "../Text"

const FeaturedArticleSection = () => {
    const featureBooks = SORTED_BOOKS_BY_DATE.filter((books: iArticle) => books.featureArticle === true)
    const featureMeetings = SORTED_MEETINGS_BY_DATE.filter((meeting: iArticle) => meeting.featureArticle === true)
    return (
        <>
            {featureMeetings.length &&
                (<>
                    <Text subtitle className="mb-5 md:!text-4xl text-3xl w-full px-3 !font-medium">
                        I nostri Incontri
                    </Text><hr className='border-1 mb-5 w-[98%]     mx-auto' />

                    {
                        featureMeetings.map((each, i) => (
                            console.log(each),
                            <FeaturedArticle article={each.preview} path={each.path} key={each.path + i} />
                        ))
                    }

                    <Seperator />
                </>
                )}
            
            {featureBooks.length &&
                (<>
                    <Text subtitle className="mb-5 md:!text-4xl text-3xl w-full px-3 !font-medium">
                        I nostri Articoli
                    </Text>
                    <hr className='border-1 mb-5 w-[98%] mx-auto' />

                    {
                        featureBooks.map((each, i) => (
                            <FeaturedArticle article={each.preview} path={each.path} key={each.path + i} />
                        ))
                    }

                    <Seperator />
                </>)}
        </>

    )
}

export default FeaturedArticleSection