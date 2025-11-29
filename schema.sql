-- The tables are automatically created when backend starts
-- so no need to create tables manually
-- The warehouse will also be created if there's none

DROP TYPE IF EXISTS building_type_enum CASCADE;
DROP TYPE IF EXISTS equipment_type_enum CASCADE;

INSERT INTO locations (room_name, building_type) VALUES
    ('WA1000', 'Warehouse'),
    ('SCA101', 'Classroom'),
    ('ENB205', 'Lab'),
    ('LIB301', 'Library'),
    ('MSC201', 'Office'),
    ('DORM101', 'Dorm'),
    ('CAF100', 'Cafeteria');

INSERT INTO equipment (model, equipment_type, location_id) VALUES
    -- Warehouse
    ('Dell UltraSharp U2720Q', 'monitor', 1),
    ('Logitech MX Master 3', 'mouse', 1),
    ('Keychron K8', 'keyboard', 1),
    ('HP LaserJet Pro', 'printer', 1),
    ('Dell Latitude 5520', 'laptop', 1),
    
    -- Classroom
    ('Epson PowerLite X41+', 'projector', 2),
    ('Canon EOS R6', 'camera', 2),
    ('Blue Yeti USB', 'microphone', 2),
    ('JBL Flip 6', 'speaker', 2),
    ('Dell UltraSharp U2720Q', 'monitor', 2),
    
    -- Lab
    ('Nikon Eclipse E200', 'microscrope', 4),
    ('NVIDIA RTX 4090', 'gpu', 4),
    ('Dell PowerEdge R740', 'server', 4),
    ('Dell UltraSharp U2720Q', 'monitor', 4),
    ('Logitech MX Master 3', 'mouse', 4),
    ('Keychron K8', 'keyboard', 4),
    
    -- Office
    ('Dell Latitude 5520', 'laptop', 7),
    ('HP LaserJet Pro', 'printer', 7),
    ('Dell UltraSharp U2720Q', 'monitor', 7),
    ('Logitech MX Master 3', 'mouse', 7),
    ('Keychron K8', 'keyboard', 7),
    
    -- Library
    ('Epson PowerLite X41+', 'projector', 6),
    ('Canon EOS R6', 'camera', 6),
    ('Dell UltraSharp U2720Q', 'monitor', 6),
    
    -- misc
    ('Dell Latitude 5520', 'laptop', 3),
    ('Logitech MX Master 3', 'mouse', 3),
    ('Keychron K8', 'keyboard', 3),
    ('NVIDIA RTX 4090', 'gpu', 5),
    ('Blue Yeti USB', 'microphone', 5),
    ('JBL Flip 6', 'speaker', 5);