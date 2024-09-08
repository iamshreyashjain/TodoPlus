export default function LoginScreenSkeleton() {
    return (
        <div className="min-w-screen min-h-screen bg-slate-500 sm:flex">
            <div className="hidden sm:w-2/3 sm:bg-slate-300 sm:flex sm:justify-center sm:items-center">
                <div className="w-1/2 rounded-lg bg-white flex flex-col items-center py-4">
                    {/* Skeleton for the Logo image */}
                    <div className="w-1/6 h-20 bg-gray-200 rounded-full animate-pulse shadow-md shadow-gray-400 mb-4"></div>

                    {/* Skeleton for the second image */}
                    <div className="w-5/6 min-h-80 mt-10 bg-gray-200 animate-pulse mb-4 rounded-lg"></div>

                    {/* Skeleton for the text */}
                    <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse mb-2 mt-6"></div>

                    {/* Skeleton for the copyright text */}
                    <div className='flex w-full mx-auto gap-2 justify-center items-center'>
                        <div className="w-1/3 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
            <div className="sm:w-1/3 h-screen bg-slate-500 p-4 gap-3 flex flex-col">
                <div className='sm:hidden h-1/3 py-11 '>
                    <div className="w-1/6 h-16 mx-auto bg-gray-200 rounded-full animate-pulse shadow-md shadow-gray-400 mb-4"></div>
                </div>
                <div className="flex flex-col sm:mt-44  justify-center items-center gap-3">
                    <div className="w-full h-40 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="w-full h-40 bg-gray-200 rounded animate-pulse mb-2"></div>
                </div>
            </div>
        </div>
    );
}
