import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";
import Header from "../props/page";
import UserProfile from "../multi-props/page";


export default function Page() {
    return (
        <>
            <div>Header and Props</div>
            <Header title="คุณสมบัติ" />
            <div>
                <h1>Shopping Page</h1>
                <ServerComponent />

            </div>
            <div>
                <h1>Client Component</h1>
                <ClientComponent />
            </div>
            <div>
                <h1>Multi Props</h1>
                <UserProfile name="John Doe" age={30} email="john.doe@example.com" isAdmin={true} />
            </div>
        </>

    )
}