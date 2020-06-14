<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * @param Request $request
     * @return array
     */
    public function rules(Request $request)
    {
        $params = $request->all();
        if (isset($params['id'])) {
            return [
                'title' => 'required|max:255',
                'content' => 'required|max:255',
                'slug' => ['required', Rule::unique('posts')->ignore($params['id']), 'max:255'],
            ];
        } else {
            return [
                'title' => 'required|max:255',
                'content' => 'required|max:255',
                'slug' => 'required|unique:posts,slug|max:255',
            ];
        }

    }

    public function messages()
    {
        return [
            'title.max' => 'title toi da 255',
            'content.max' => 'content toi da 255',
            'slug.required' => 'slug bat buoc nhap',
            'title.required' => 'title bat buoc nhap',
            'content.required' => 'content bat buoc nhap',
            'slug.max' => 'slug toi da 255',
            'slug.unique' => 'Slug duy nhat',
        ];
    }
}
