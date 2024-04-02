<?php
//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

echo "in the name of Allah\n";

$jour = 4;

echo "alhamdo li Allah, on a passe:\n";
switch($jour)
{
    case 7:
        echo "Dimanche\n";
    case 6:
        echo "Samedi\n";
    case 5:
        echo "Vendredi\n";
    case 4:
        echo "Jeudi\n";
    case 3:
        echo "Mercredi\n";
    case 2:
        echo "Mardi\n";
    case 1:
        echo "Lundi\n";

        break;
    default:
        echo "incorrect\n";
        break;
}

