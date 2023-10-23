import { Button } from "@/components/ui/button"

import { Logo } from "./logo"

export const Footer = () => {
  return (
    <div>
      <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms & Conditions
          </Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-muted-foreground">
        <Button variant="ghost" size="sm">
          <a href="https://github.com/pradeeptosarkar" target="_blank">
          Made with ❤️ by Pradeepto Sarkar</a>
        </Button>
      </div>
    </div>
  )
}