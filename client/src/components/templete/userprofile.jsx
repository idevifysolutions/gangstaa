import {UserData} from "../../context/UserContext"


function UserProfile() {

const {user}  = UserData();

console.log(user);

    return (
        <div className="flex flex-col md:flex-row w-full h-auto md:h-screen">
            {/* Left Column */}
            <div className="w-full md:w-1/4 bg-gray-500 p-4 md:p-6 text-center text-white">
                 <img 
                   src={`https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain`}
                    alt="Profile" 
                    className="rounded-full mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48"
                /> 


                <input
                    type="file"
                    className="mt-4"
                />
                <h2 className="mt-4 text-lg sm:text-xl font-semibold">
                    { user.role || "User"} <br></br> { user.name || "Name"}
                </h2>
                <p className="text-sm sm:text-base">{ user.email || "user@example.com"}</p>
            </div>



            {/* Right Column */}
            <div className="w-full md:w-3/4 p-4 md:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Profile Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>

                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            className={`border p-2 w-full`}
                        />                        
                    </div>

                    {/* Surname */}
                    <div>
                        <label>Surname</label>
                        <input
                            type="text"
                            name="surname"
                            value={user.name}
                            className={`border p-2 w-full`}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            className={`border p-2 w-full`}
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={user.phone}
                            className={`border p-2 w-full`}
                        />
                    </div>
                </div>


                <div className="flex justify-center mt-6 space-x-4">
                        <>
                            <button
                                className="p-2 text-sm sm:text-xl font-bold text-white bg-black cursor-pointer"
                            >
                                Save Info
                            </button>
                            <button
                                className="p-2 text-sm sm:text-xl font-bold text-white bg-black cursor-pointer"
                            >
                                 Edit Profile
                            </button>
                        </>
                   
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
