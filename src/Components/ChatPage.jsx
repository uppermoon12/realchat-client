import { useEffect, useState } from "react";

export default function ChatPage() {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        console.log(showNav ? 'show' : 'hide'); 
    }, [showNav]);

    return (
        <div className="w-full h-screen flex items-center justify-center md:py-10 bg-zinc-900">
            <div className="w-full md:w-2/3 border h-full rounded-2xl flex">
                <div className="md:w-1/4 border border-rose-600 rounded-2xl md:visible invisible h-full"></div>
                <div className="w-full md:w-3/4 border border-green-600 rounded-2xl h-full">
                    <div className="w-full border h-20 md:h-12 border-blue-600 rounded-2xl flex justify-between">
                        <div className="w-20 h-full border border-orange-600 rounded-2xl md:invisible visible">
                            <div className={`fixed md:invisible visible top-0 left-0 bg-white w-5/6 h-full ${ showNav ? 'translate-x-0' : '-translate-x-[600px]'}`}>
                                <button className="text-black" onClick={() => setShowNav(state => !state)}>
                                    Nav
                                </button>
                            </div>
                            <button className="text-white" onClick={() => setShowNav(state => !state)}>
                                Nav
                            </button>
                        </div>
                        <div className="w-1/2 max-w-1/2 h-full border border-orange-600 rounded-2xl flex">
                            <div className="h-full w-1/2 border border-red-600 rounded-2xl"></div>
                            <div className="h-full w-1/2 border border-red-600 rounded-2xl"></div>
                        </div>
                    </div>
                    <div className="w-full border border-yellow-600 rounded-2xl h-[800px] md:h-[455px] flex flex-col justify-between">
                        <div className="w-full bg-zinc-500 h-5/6 rounded-2xl"></div>
                        <div className="w-full bg-zinc-300 h-20 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}