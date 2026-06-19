import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MobileTopbar } from "@/components/layout/mobile-topbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

describe("MobileTopbar", () => {
  it("is closed by default and opens the nav on click", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <MobileTopbar />
      </ThemeProvider>,
    );

    const toggle = screen.getByRole("button", { name: "Ouvrir le menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();

    await user.click(toggle);

    expect(screen.getByRole("button", { name: "Fermer le menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
