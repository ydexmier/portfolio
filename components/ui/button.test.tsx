import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders a link when href is provided", () => {
    render(<Button href="/contact">Me contacter</Button>);
    const link = screen.getByRole("link", { name: "Me contacter" });
    expect(link).toHaveAttribute("href", "/contact");
  });

  it("renders a native button when href is not provided", () => {
    render(<Button type="submit">Envoyer</Button>);
    expect(screen.getByRole("button", { name: "Envoyer" })).toBeInTheDocument();
  });
});
