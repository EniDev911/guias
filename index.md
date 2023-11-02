---
layout: default
title: EniDev
---

[comment]: <> (author: enidev911)
[comment]: <> (theme: https://github.com/pages-themes/midnight)


<!-- Databases -->
<p align="center">
    {% for item in site.data.root.db %}
        <a href="{{ item.link | relative_url }}">
            <kbd><img 
                src="{{ item.logo | relative_url }}" 
                alt="{{ item.name }}"
                height="80"></kbd>
        </a>
    {% endfor %}
</p>


<!-- Programming -->
<p align="center">
  {% for item in site.data.root.programming %}
    <a href="{{ item.link | relative_url }}">
        <kbd><img 
            src="{{ item.logo | relative_url }}"
            alt="{{ item.name }}"
            height="80"></kbd>
    </a>
  {% endfor %}
</p>

<!-- Editores -->
<p align="center">
  {% for item in site.data.root.editors %}
    <a href="{{ item.link | relative_url }}">
        <kbd><img 
            src="{{ item.logo | relative_url }}"
            alt="{{ item.name }}"
            height="80"></kbd>
    </a>
  {% endfor %}
</p>

<!-- Herramientas -->
<p align="center">
    <!-- MermaidJS -->
    <a href="{{ '/mermaidjs' | relative_url }}"><kbd><img src="{{ '/assets/images/logos/mermaid.svg' | relative_url }}" height="80"></kbd></a>
</p>