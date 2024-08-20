import { useId } from "react"

export const IndexUseId = () => {

    // const usernameId = useId();
    // const emailId = useId();
    // const passwordId = useId();

    // return (
    //     <form>
    //         <div>
    //             <label htmlFor={usernameId}> Username:  </label>
    //             <input type="text" id="username" name="username" />
    //         </div>
    //         <div>
    //             <label htmlFor={emailId}> Email:  </label>
    //             <input type="text" id="email" name="email" />
    //         </div>
    //         <div>
    //             <label htmlFor={passwordId}> Password:  </label>
    //             <input type="text" id="password" name="password" />
    //         </div>
    //         <button>submit</button>
    //     </form>
    // )


// this lets us to avoid calling useId for every single element that needs a unique id
    const id = useId();

    return (
        <form>
            <div>
                <label htmlFor={id + "usernameId"}> Username:  </label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor={id + "emailId"}> Email:  </label>
                <input type="text" id="email" name="email" />
            </div>
            <div>
                <label htmlFor={id + "passwordId"}> Password:  </label>
                <input type="text" id="password" name="password" />
            </div>
            <button>submit</button>
        </form>
    );
};