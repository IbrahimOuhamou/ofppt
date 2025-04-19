<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - @yield('title')</title>
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
</head>
<body class="bg-gray-100 text-gray-900 font-sans antialiased">
    <div class="max-w-4xl mx-auto px-4 py-8">
        <nav class="mb-8 flex gap-4 border-b border-gray-200 pb-4">
            <a href="/" class="text-blue-600 hover:text-blue-800 font-medium">Home</a>
            <a href="/blogs" class="text-blue-600 hover:text-blue-800 font-medium">Blogs</a>
            <a href="/blogs/new" class="text-blue-600 hover:text-blue-800 font-medium">Create Blog</a>
        </nav>

        <h1 class="text-3xl font-bold mb-6 text-gray-800">@yield('title')</h1>

        @yield('content')
    </div>
</body>
</html>
