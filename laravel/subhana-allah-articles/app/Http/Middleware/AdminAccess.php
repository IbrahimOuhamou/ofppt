<?php

namespace App\Http\Middleware;

// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $is_admin = ($request->query('admin') ?? 0) == 1;

        return $next($request);
    }
}
