@extends('layouts.app')

@section('title', 'Create New Blog')

@section('content')
    <form method="POST" action="/blogs/new" class="bg-white p-6 rounded-lg shadow-md space-y-4">
        @csrf
        <div>
            <label for="id" class="block text-gray-700 font-medium mb-1">Title:</label>
            <input type="number" id="title" name="id" required
                   class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div>
            <label for="title" class="block text-gray-700 font-medium mb-1">Title:</label>
            <input type="text" id="title" name="title" required
                   class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div>
            <label for="content" class="block text-gray-700 font-medium mb-1">Content:</label>
            <textarea id="content" name="content" required
                      class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <div>
            <button type="submit"
                    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Create Blog
            </button>
        </div>
    </form>
@endsection
