-- Enable required extension (if not already enabled in Supabase)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Table: ideas
CREATE TABLE ideas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID, -- optional, if you want user ownership
    CONSTRAINT title_min_length CHECK (char_length(title) >= 3)
);

-- Table: tags
CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: idea_tags (many-to-many)
CREATE TABLE idea_tags (
    idea_id UUID NOT NULL REFERENCES ideas(id) ON DELETE CASCADE,
    tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (idea_id, tag_id)
);

-- Optional indexes for better lookup performance
CREATE INDEX idx_ideas_user_id ON ideas(user_id);
CREATE INDEX idx_idea_tags_idea_id ON idea_tags(idea_id);
CREATE INDEX idx_idea_tags_tag_id ON idea_tags(tag_id);