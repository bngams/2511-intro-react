import { Skeleton } from "@/components/ui/skeleton";

function ProductListSkeleton() {
    return (
        <div className="flex flex-wrap space-x-4 space-y-4 justify-center">
            <Skeleton className="h-100 w-80" />
            <Skeleton className="h-100 w-80" />
            <Skeleton className="h-100 w-80" />
            <Skeleton className="h-100 w-80" />
            <Skeleton className="h-100 w-80" />
            <Skeleton className="h-100 w-80" />
            <Skeleton className="h-100 w-80" />
            <Skeleton className="h-100 w-80" />
          </div>
    );
}
export default ProductListSkeleton;