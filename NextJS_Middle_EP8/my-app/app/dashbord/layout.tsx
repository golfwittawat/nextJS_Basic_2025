export default function DashbordLayout({ children }: {
     children: React.ReactNode }) {
    return (
        <section>
            <nav>Next Website</nav>
            
            {children}
        </section>
    );
}   

