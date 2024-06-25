<?php
//بسم الله الرحمن الرحيم
//la ilaha illa Allah Mohammed Rassoul Allah

class Produit {
    //Declaration
    public $code;
    public $designation;
    public $prix;

    function set_prix($prix) {
        if($prix > 0) {
            $this->prix = $prix;
        } else {
            $this->prix = 1;
        }
    }

    function get_prix() {
        return $this->prix * 1.5;
    }

}

$produit1 = new Produit();

$produit1->code = -5;
$produit1->designation = 'PC';
$produit1->prix = 5000;

var_dump($produit1);

?>
