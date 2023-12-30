import bannerImage from '../../assert/1x/home-banner.png'
export default function HomeBanner() {
    return (
        <div className="py-5 px-2 md:px-0 md:pb-20 pt-5">
            <img src={bannerImage} alt="banner-img" />
        </div>
    )
}
