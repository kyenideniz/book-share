import prismadb from "@/lib/prismadb";

interface DaashboardPageProps {
    params: {storeId: string};
}

const DaashboardPage: React.FC<DaashboardPageProps> = async ({
    params
}) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    });

    return (
        <div>
            Active Store: {store?.name}
        </div>
    );
}

export default DaashboardPage;