@extends('layouts.app')

@section('title', $blog['title'])

@section('content')
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
        <p class="text-gray-700">
            {{ $blog['content'] }}
        </p>
    </div>

    <div class="flex gap-4">
        <form method="POST" action="/blogs/{{ $blog['id'] }}"
              onsubmit="return confirm('Are you sure you want to delete this blog?')">
            @csrf
            @method('DELETE')
            <button type="submit"
                    class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                Delete Blog
            </button>
        </form>

        <a href="#"
           class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
            Edit Blog
        </a>
    </div>
@endsection
