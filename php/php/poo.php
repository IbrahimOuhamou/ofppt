<?php
//بسم الله الرحمن الرحيم
//la ilaha illa Allah Mohammed Rassoul Allah

class Produit {
    //Declaration
    public $code;
    public $designation;
    private $prix;
    public const TVA = 1.5;

    private static $nbrProduit = 0;

    function __get($param) {
        echo 'alhamdo li Allah tried to __get ' . $param . "\n";
    }

    function __construct($code = 1, $designation = 1, $prix = 1) {

        Produit::$nbrProduit++;

        $this->code = $code;
        $this->designation = $designation;
        $this->setPrix($prix);
    }

    function get_nbr() {
        return Produit::$nbrProduit;
    }

    function json_encode() {
        return json_encode(get_object_vars($this));
    }

    public function __toString() {
        return 'Code:' . $this->code . ' designation:' . $this->designation . ' prix' . $this->getPrix();
    }

    function setPrix($prix) {
        if($prix > 0) {
            $this->prix = $prix;
        } else {
            $this->prix = 1;
        }
    }

    function getPrix() {
        return $this->prix * Produit::TVA;
    }
}

$produit1 = new Produit(10, 'PC', -5);
$produit2 = new Produit(30, 'STYLO', 1000);

echo $produit1;
echo "\n" . $produit1->json_encode();
echo "\n" . $produit2;
echo "\n" . $produit2->json_encode();

new Produit(30, 'STYLO', 1000);
new Produit(30, 'STYLO', 1000);
new Produit(30, 'STYLO', 1000);
echo "\n" . $produit1->get_nbr();

?>

