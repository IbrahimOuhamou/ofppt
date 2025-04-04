<!DOCTYPE html>
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>بسم الله الرحمن الرحيم</title>
    @vite('resources/css/app.css')
</head>
<body>
    <header class="bg-amber-200">
        <a href="/subhana-allah/1">subhna-allah</a>
        <a href="/">home</a>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
    </header>

    <main>
        @yield('content')
    </main>

    <footer></footer>
</body>
</html>
