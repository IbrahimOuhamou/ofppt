<?php
//بسم الله الرحمن الرحيم
//la ilaha illa Allah Mohammed Rassoul Allah

echo "بسم الله الرحمن الرحيم\n";

class BismiAllah {
    public $bismi_allah = "bismi_allah";

    public function __construct($new_bismi_allah = 'bismi_allah') {
        $this->bismi_allah = $new_bismi_allah;
    }

    public function bismiAllah() {
        echo "when we start something we say: '" . $this->bismi_allah . "'\n";
    }
}

$bismi_allah = new BismiAllah("in the name of Allah");
$bismi_allah->bismiAllah();

