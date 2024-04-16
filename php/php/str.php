<?php
//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

echo "in the name of Allah\n";

$i = strpos("bismi Allah", "Allah");
echo $i ? $i : "false";

echo strtoupper("\nBismi Allah") . " " . strtolower("Bismi Allah");
$bismi_allah_str = "\nAllah Akbar\nAllah Akbar\n";
$bismi_allah_str = str_replace("\n", "\n\n", $bismi_allah_str);
echo $bismi_allah_str;
echo "  la ilaha illa Allah mohammed rassoul Allah  \n";
echo trim("  la ilaha illa Allah mohammed rassoul Allah  \n");
echo substr("bsd \nbismi Allah fdjkfajkdjkadn", 4, 12);

