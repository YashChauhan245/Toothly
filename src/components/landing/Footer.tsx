import Image from "next/image";

function Footer() {
  return (
    <footer className="px-6 py-10 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/logo1.png" alt="Toothly" width={32} height={32} />
              <span className="font-semibold text-lg">Toothly</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered dental assistance that actually helps.
            </p>
          </div>

          {[
            { title: "Product", items: ["How it works", "Pricing", "FAQ"] },
            { title: "Support", items: ["Help center", "Contact us", "Status"] },
            { title: "Legal", items: ["Privacy", "Terms", "Security"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-medium mb-3">{col.title}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-foreground">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-6 pt-6 text-center text-sm text-muted-foreground">
          &copy; 2026 Toothly. Built for real people with real dental questions.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
