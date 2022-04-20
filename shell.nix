with (import <nixpkgs> {});
mkShell {
  name = "Blog:Vitepress";
  buildInputs = [
    nodejs-16_x
  ];
}
