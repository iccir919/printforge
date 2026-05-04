import Link from "next/link"
import type { ReactNode } from "react"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"

export default function ModelsLayout({ children } : { children: ReactNode }) {
    const categories: Category[] = getAllCategories()
    console.log(categories)
    return (
        <div>
            <nav>
                <Link href="/3d-models">All</Link>
                {categories.map((category) => (
                    <Link
                        key={category.slug}
                        href={`/3d-models/categories/${category.slug}`}
                    >
                        {category.displayName}
                    </Link>
                ))}
            </nav>
            {children}
        </div>
    )
}