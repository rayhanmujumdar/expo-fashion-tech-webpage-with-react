import Container from "../components/Container";
import Layout from "../components/Layout";
import PriceRange from "../components/Product/PriceRange";
import ProductItems from "../components/Product/ProductItems";
import QuickMove from "../components/QuickMove";
import Quote from "../ui/Quote";
import PagePagination from "../components/Product/PagePagination";

export default function Products() {

    return (
        <Container>
            <Layout>
                <main>
                    <Quote text="find the items you are looking for..." />
                    <section className="my-20">
                        <PriceRange />
                        <ProductItems />
                        <PagePagination />
                    </section>
                </main>
                <QuickMove />
            </Layout>
        </Container>
    );
}
