    "use client";
    
    import { useState } from 'react';

    interface VirtualClassroomProps {
    onExit?: () => void;
    }

    export default function VirtualClassroom({ onExit }: VirtualClassroomProps = {}) {
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const [showChat, setShowChat] = useState(true);
    const [showParticipants, setShowParticipants] = useState(false);
    const [chatMessage, setChatMessage] = useState('');

    const participants = [
        { id: 1, name: 'Prof. Marie Laurent', role: 'Enseignant', active: true, avatar: 'ML' },
        { id: 2, name: 'Sophie Dubois', role: 'Étudiant', active: true, avatar: 'SD' },
        { id: 3, name: 'Lucas Martin', role: 'Étudiant', active: false, avatar: 'LM' },
        { id: 4, name: 'Emma Bernard', role: 'Étudiant', active: true, avatar: 'EB' },
        { id: 5, name: 'Thomas Petit', role: 'Étudiant', active: true, avatar: 'TP' },
        { id: 6, name: 'Léa Moreau', role: 'Étudiant', active: false, avatar: 'LM' },
        { id: 7, name: 'Alexandre Roy', role: 'Étudiant', active: true, avatar: 'AR' },
        { id: 8, name: 'Camille Simon', role: 'Étudiant', active: true, avatar: 'CS' }
    ];

    const messages = [
        { id: 1, sender: 'Sophie Dubois', message: 'Bonjour à tous !', time: '14:30' },
        { id: 2, sender: 'Prof. Marie Laurent', message: 'Bonjour ! Nous allons commencer dans 2 minutes.', time: '14:31' },
        { id: 3, sender: 'Lucas Martin', message: 'Est-ce que vous pouvez partager les slides ?', time: '14:32' },
        { id: 4, sender: 'Prof. Marie Laurent', message: 'Oui, je les partage maintenant.', time: '14:32' }
    ];

    return (
        <div className="size-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
        {/* Header */}
        <header className="bg-gray-900/80 backdrop-blur-md border-b border-pink-500/20 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>
            <div>
                <h1 className="text-white text-lg">Mathématiques Avancées - Cours #12</h1>
                <p className="text-gray-400 text-sm">Prof. Marie Laurent • 8 participants</p>
            </div>
            </div>
            <div className="flex items-center gap-2">
            <div className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                45:32
            </div>
            <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
            </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
            {/* Video Grid */}
            <div className="flex-1 p-6">
            <div className="h-full flex flex-col gap-4">
                {/* Main Speaker Video */}
                <div className="flex-1 bg-gray-800 rounded-xl overflow-hidden relative border-2 border-pink-500/30 shadow-lg shadow-pink-500/10">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4 shadow-lg shadow-pink-500/50">
                        ML
                    </div>
                    <p className="text-white text-xl">Prof. Marie Laurent</p>
                    <p className="text-gray-400">Enseignant</p>
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm">
                    Prof. Marie Laurent
                </div>
                <div className="absolute top-4 left-4 bg-pink-600/80 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-xs flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    </svg>
                    En cours
                </div>
                </div>

                {/* Participant Videos Grid */}
                <div className="grid grid-cols-4 gap-3 h-48">
                {participants.slice(1, 5).map((participant) => (
                    <div key={participant.id} className="bg-gray-800 rounded-lg overflow-hidden relative border border-pink-500/20 hover:border-pink-500/40 transition-colors">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                        <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500/50 to-purple-600/50 rounded-full flex items-center justify-center text-white text-lg mx-auto">
                            {participant.avatar}
                        </div>
                        </div>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                        {participant.name.split(' ')[0]}
                    </div>
                    {!participant.active && (
                        <div className="absolute top-2 right-2 bg-red-600/80 backdrop-blur-sm p-1 rounded">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                        </svg>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-80 bg-gray-900/50 backdrop-blur-sm border-l border-pink-500/20 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-pink-500/20">
                <button
                onClick={() => { setShowChat(true); setShowParticipants(false); }}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    showChat
                    ? 'text-pink-500 border-b-2 border-pink-500 bg-pink-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
                >
                Chat
                </button>
                <button
                onClick={() => { setShowChat(false); setShowParticipants(true); }}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    showParticipants
                    ? 'text-pink-500 border-b-2 border-pink-500 bg-pink-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
                >
                Participants ({participants.length})
                </button>
            </div>

            {/* Chat Panel */}
            {showChat && (
                <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                    <div key={msg.id} className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                        <span className="text-pink-400 text-sm font-medium">{msg.sender}</span>
                        <span className="text-gray-500 text-xs">{msg.time}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{msg.message}</p>
                    </div>
                    ))}
                </div>
                <div className="p-4 border-t border-pink-500/20">
                    <div className="flex gap-2">
                    <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        placeholder="Écrivez un message..."
                        className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-pink-500/20 focus:border-pink-500/50 outline-none"
                    />
                    <button className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            )}

            {/* Participants Panel */}
            {showParticipants && (
                <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-2">
                    {participants.map((participant) => (
                    <div
                        key={participant.id}
                        className="bg-gray-800/50 rounded-lg p-3 flex items-center justify-between hover:bg-gray-800 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                            {participant.avatar}
                        </div>
                        <div>
                            <p className="text-white text-sm">{participant.name}</p>
                            <p className="text-gray-400 text-xs">{participant.role}</p>
                        </div>
                        </div>
                        <div className="flex gap-1">
                        {participant.active ? (
                            <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                            </svg>
                        )}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            )}
            </div>
        </div>

        {/* Control Bar */}
        <div className="bg-gray-900/80 backdrop-blur-md border-t border-pink-500/20 px-6 py-4">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-4 rounded-full transition-all ${
                    isMuted
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                >
                {isMuted ? (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    </svg>
                )}
                </button>

                <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`p-4 rounded-full transition-all ${
                    isVideoOff
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                >
                {isVideoOff ? (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                )}
                </button>

                <button
                onClick={() => setIsScreenSharing(!isScreenSharing)}
                className={`p-4 rounded-full transition-all ${
                    isScreenSharing
                    ? 'bg-pink-600 hover:bg-pink-700'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                </button>

                <button className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                </button>
            </div>

            <button
                onClick={onExit}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Quitter le cours
            </button>

            <div className="flex items-center gap-3">
                <button className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                </button>

                <button className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
    );
    }
