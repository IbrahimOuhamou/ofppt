#بسم الله الرحمن الرحيم
#la ilaha illa Allah Mohammed Rassoul Allah
let
  pkgs = import <nixpkgs> {};
in pkgs.mkShell {
  packages = [
    (pkgs.python3.withPackages (python-pkgs: [
      python-pkgs.pymongo
    ]))
  ];
}
