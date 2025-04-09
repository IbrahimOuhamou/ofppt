@extends('layouts.app')

@section('title', 'All Blogs')

@section('content')
    <div class="space-y-6">
        @foreach($blogs as $blog)
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">
                    <a href="/blogs/{{ $blog['id'] }}" class="hover:text-blue-600 transition-colors">
                        {{ $blog['title'] }}
                    </a>
                </h2>
                <p class="text-gray-600 line-clamp-3 mb-4">{{ $blog['content'] }}</p>
                <div class="flex justify-between items-center">
                    <a href="/blogs/{{ $blog['id'] }}"
                        class="text-blue-600 hover:text-blue-800 font-medium">
                        Read More
                    </a>
                    <div class="flex gap-2">
                        <a href="/blogs/edit/{{ $blog['id'] }}"
                            class="text-gray-500 hover:text-gray-700 text-sm">
                            Edit
                        </a>
                        <form method="POST" action="/blogs/{{ $blog['id'] }}"
                                onsubmit="return confirm('Are you sure you want to delete this blog?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit"
                                    class="text-red-600 hover:text-red-800 text-sm">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@endsection
