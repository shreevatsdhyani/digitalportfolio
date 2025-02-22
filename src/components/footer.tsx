export function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground">
              Built with ❤️ by{" "}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                Shreevats Dhyani
              </a>
              . All rights reserved © {currentYear}.
            </p>
          </div>
        </div>
      </footer>
    )
  }