import Container from "../components/Container";
import Layout from "../components/Layout";
import PagePagination from "../components/Product/PagePagination";
import PriceRange from "../components/Product/PriceRange";
import ProductBanner from "../components/Product/ProductBanner";
import ProductItems from "../components/Product/ProductItems";
import ProductLayout from "../components/Product/ProductLayout";
import ProductMenuItem from "../components/Product/ProductMenuItem";
import ProductMenubar from "../components/Product/ProductMenubar";
import QuickMove from "../components/QuickMove";
import Label from "../components/ui/Label";
import Quote from "../components/ui/Quote";

export default function Products() {
    return (
        <Container>
            <Layout>
                <main>
                    <ProductBanner />
                    <Quote text="find the items you are looking for..." />
                    <section className="my-20">
                        <PriceRange />
                        <ProductLayout>
                            <ProductMenubar>
                                <ProductMenuItem title="Value">
                                    <Label label="Free" />
                                    <Label label="Paid" />
                                </ProductMenuItem>
                                <ProductMenuItem title="Season">
                                    <Label label="SS23/24" />
                                    <Label label="AW23/24" />
                                    <Label label="SS25/26" />
                                    <Label label="AW25/26" />
                                </ProductMenuItem>
                                <ProductMenuItem title="Color">
                                    <Label label="White & Black" />
                                    <Label label="Bright" />
                                    <Label label="Shade" />
                                    <Label label="Pastels" />
                                </ProductMenuItem>
                                <ProductMenuItem title="Category">
                                    <Label label="Floral" />
                                    <Label label="Ethnic" />
                                    <Label label="Abstract" />
                                    <Label label="Stripe" />
                                    <Label label="Check" />
                                    <Label label="Tropical" />
                                    <Label label="Placement" />
                                    <Label label="Camouflage" />
                                    <Label label="Border" />
                                    <Label label="Nature" />
                                    <Label label="Christmas" />
                                    <Label label="Halloween" />
                                    <Label label="Cartoon" />
                                    <Label label="Robot" />
                                    <Label label="Tie dye" />
                                    <Label label="Animal" />
                                    <Label label="Typography" />
                                    <Label label="Geometric" />
                                    <Label label="Print embroidery" />
                                </ProductMenuItem>
                            </ProductMenubar>
                            <ProductItems />
                        </ProductLayout>
                        <PagePagination />
                    </section>
                </main>
                <QuickMove />
            </Layout>
        </Container>
    );
}
